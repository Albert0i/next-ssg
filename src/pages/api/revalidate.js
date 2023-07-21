export default async function handler(req, res) {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
      return res.status(401).json({ message: 'Invalid token' })
    }
   
    try {
      // this should be the actual path not a rewritten path
      // e.g. for "/blog/[slug]" this should be "/blog/post-1"
      await res.revalidate('/posts')
      return res.json({ revalidated: true })
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send('Error revalidating')
    }
  }

  /*
     Incremental Static Regeneration
     https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration

     On-Demand Revalidation
     http://localhost:3000/api/revalidate?secret=next-ssg

     https://next-ssg.onrender.com/api/revalidate?secret=next-ssg
  */