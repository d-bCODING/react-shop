import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import Footer from '../components/Footer';

const SortedProductPage = () => {
    const productsType = useParams().type || "";

    return (
        <>
            <Header />
            <ItemList sort='complex' category={productsType}></ItemList>
            <Footer />
        </>
    );
}

export default SortedProductPage;