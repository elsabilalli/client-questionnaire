// Vercel Serverless Function to handle Airtable submissions
// This keeps your API key secure

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Get credentials from environment variables
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Submissions';

    // Check if credentials are configured
    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
        console.error('Missing Airtable credentials');
        return res.status(500).json({ 
            error: 'Server configuration error. Please contact support.' 
        });
    }

    try {
        const data = req.body;

        // Send to Airtable
        const response = await fetch(
            `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fields: data
                })
            }
        );

        if (response.ok) {
            const result = await response.json();
            return res.status(200).json({ 
                success: true, 
                message: 'Submission saved successfully',
                id: result.id 
            });
        } else {
            const error = await response.json();
            console.error('Airtable API Error:', error);
            return res.status(response.status).json({ 
                error: 'Failed to save submission', 
                details: error 
            });
        }
    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            message: error.message 
        });
    }
}

