// functions/api/contact.js

export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    
    // 1. Logic: Save to D1 Database (Optional)
    // If you have a D1 database bound as 'DB'
    if (context.env.DB) {
      await context.env.DB.prepare(
        `INSERT INTO inquiries (firstName, lastName, email, phone, company, product, message, created_at) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        data.firstName, data.lastName, data.email, 
        data.phone, data.company, data.product, 
        data.message, new Date().toISOString()
      ).run();
    }

    // 2. Logic: Return Success to React
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to process enquiry: " + err.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500
    });
  }
}