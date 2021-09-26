import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';

export default function home({ pizzas }) {
  return (
    <Layout>
      <Home pizzas={pizzas} />
    </Layout>
  )
}

export const getStaticProps = async () =>{
  const res = await fetch('https://my-pizza-backend.herokuapp.com/pizza/');
  const pizzas = await res.json();

  return {
      props: {
          pizzas,
      }
  }
}