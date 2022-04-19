

import Head from 'next/head';
import Form from '../components/Form'

export default function Home({users}) {
 
  return (<>
    <Head>
    <script src="https://kit.fontawesome.com/b0e3c6f181.js" crossorigin="anonymous"></script>
    </Head>
    <Form user={users}/>
  </>
      )
}

export async function getServerSideProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =  await response.json();
    // console.log(data);
    return {
      props:{
        users:data,
      },
    }
}