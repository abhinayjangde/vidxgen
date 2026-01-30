import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { createClient } from '@supabase/supabase-js'

type ClerkWebhookEvent = {
  data: {
    id: string
    first_name: string | null
    last_name: string | null
    email_addresses: Array<{
      id: string
      email_address: string
    }>
  }
  type: string
}

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SECRET

  if (!SIGNING_SECRET) {
    console.error('Missing CLERK_WEBHOOK_SECRET environment variable')
    return new Response('Server configuration error', { status: 500 })
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET)

  // Get headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Missing svix headers', {
      status: 400,
    })
  }

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  let evt: ClerkWebhookEvent

  // Verify webhook signature
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as ClerkWebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Invalid signature', {
      status: 400,
    })
  }

  // Handle user.created event
  if (evt.type === 'user.created') {
    const { id, first_name, last_name, email_addresses } = evt.data

    // Construct full name
    const name = [first_name, last_name].filter(Boolean).join(' ') || 'Unknown'

    // Get primary email
    const email = email_addresses?.[0]?.email_address || ''

    // Create Supabase client with service role key for server-side operations
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Missing Supabase environment variables')
      return new Response('Server configuration error', { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const { error } = await supabase.from('user').insert({
      clerk_id: id,
      name,
      email,
    })

    if (error) {
      console.error('Error inserting user to Supabase:', error)
      return new Response(`Error inserting user: ${error.message}`, { status: 500 })
    }

    console.log(`User ${id} created successfully in Supabase`)
  }

  return new Response('Webhook processed', { status: 200 })
}
