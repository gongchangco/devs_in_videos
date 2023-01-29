import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { GraphQLClient, gql } from 'graphql-request'
import BlogCard from '../components/BlogCard'


const graphcms = new GraphQLClient(process.env.GRAPHQL_CONTENT_API)

const QUERY = gql`
{
  posts {
    id
    title
    datePublished
    slug
    content {
      html
    }
    author {
      name
      avatar {
        url
      }
    }
    coverPhoto {
      publishedAt
      createdBy {
        id
      }
      url
    }
  }
}
`

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY)

  return{
    props: {
      posts,
    },
    revalidate: 30,
  }
}

export default function Home({ posts }) {

  return (
    <>
      <Head>
        <title>Something Not Yet</title>
        <meta name="description" content="A blog tutorial from Devs From Videos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            key={post.id}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
      </main>
    </>
  )
}
