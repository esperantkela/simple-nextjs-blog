import MainLayout from '@/components/Layouts/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
       <Component {...pageProps} />
    </MainLayout>
  )
}
