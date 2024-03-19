import React from 'react';
import Navbar from './Navbar';
import './Products.css';

const Products = () => {
    const personalizedGiftsData = [
        {
            title: 'Mugs',
            price: '245',
            link: '/personalised-gifts',
            imageUrl:
                'https://images.pexels.com/photos/3867000/pexels-photo-3867000.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Cushion',
            price: '349',
            link: '/personalised-gifts',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMytWvp-C2KebHO-vS4KoLsvTpC9GA5beN3QOLLfCAItjtIlqdJCTfpCcY4mzO3km7KXulzrGJBVPf7dxIAhRyCvgyEz3GMwvn1hyX6f0&usqp=CAc',
        },
        {
            title: 'Photo Frames',
            price: '349',
            link: '/personalised-gifts',
            imageUrl:
                'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS4nnYOWE9lOq9Qgh857skuVLf1t4-XnL4-4WbDBZLibrAj-com9OUWYKDBXTxHSl46dUWbS9-3ehrGqBUsqUOiqqwo2CL9ioo1HKRvxOnUcR-eXwXQdDo4A23g_7bY&usqp=CAc',
        },
        {
            title: 'Wallet',
            price: '500',
            link: '/personalised-gifts',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMzF7KqfEr0NJCAmn6Gepv44ubrap4wwxe3Q&usqp=CAU',
        },
        {
            title: 'Lamps',
            price: '649',
            link: '/personalised-gifts',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT541US9kRAmFan8Sy1PpnMhZIsoJpfXg1oSrxBO06XMFCe9PLwlQu2gFplziOJcVlbWCY&usqp=CAU',
        },
        {
            title: 'Personalized Indian Wedding',
            price: '700',
            link: '/personalised-gifts',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmhZ3OLrVv7dkX6MvVMvAgKPvg5o4VeMqvA&usqp=CAU',
        },
        {
            title: 'Embroidered Caps',
            price: '300',
            link: '/personalised-gifts',
            imageUrl:
                'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS2kWYfvxLb6egCVWP8mcxBAkGV-k6aWm27mXBuK2lkBawQMQ_4Qqw-i3LkvvZv4_P-zdI3V8btxM7Fs9nNgUcfMPiJAjPGEKnXfwjWTYAD_B1hHouFVjMOLA&usqp=CAc',
        },
        {
            title: 'Gold Chain - Unisex',
            price: '1500',
            link: '/personalised-gifts',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZZ6jFtzgN9fcgnvktEzb3JdHMSZFxVjBKg&usqp=CAU',
        },
        {
            title: 'MOON LAMP LIGHT',
            price: '700',
            link: '/personalised-gifts',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMyNUeeejMaQwb34LxGZbroDU3PBnbt-12GQ&usqp=CAU',
        },
        {
            title: 'Personalized Stainless SteelBottle ',
            price: '695',
            link: '/personalised-gifts',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUNx5yRRHCuX8MauTYH7XXVsNHK-qfBIGoIw&usqp=CAU',
        },
        {
            title: 'Oil Painting Photo Frame',
            price: '1,299',
            link: '/personalised-gifts',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIb9usEikXWzmDw0aTXrNqo8TOn0CXR6XsHJ6vLvmSxuaHbW2Fyx_g4xKoObckKLc4kSc&usqp=CAU',
        },
        {
            title: '3D Personalized LED lamp ',
            price: '799',
            link: '/personalised-gifts',
            imageUrl:
                'https://www.ukani.in/image/cache/catalog/71oZxRuGxIL._SL1500_-750x750w.jpg',
        },
      ];

    return (
<div>
            <Navbar />
            <div className="text-center mb-4">
                <br />
                <h1 className="fw-bold">Personalised Products</h1>
               
                <hr className="w-25 mx-auto" />
            </div>
            <div className="row rowapd catEventHomeWithTitle" style={{maxHeight:'100px', margin: 'auto', marginLeft: '15px', marginRight: '15px' }}>
                {personalizedGiftsData.map((gift, index) => (
                    <div className="col-3" key={index}>
                        <div className="card" style={{ borderRadius: '5px', boxShadow: 'none', overflow: 'hidden', margin: '0', backgroundColor: '#FFFFFF!important', marginBottom: '20px' }}>
                            <a className="center-align" href={gift.link}>
                                <img alt={gift.title} widgettype="personalized category" className="card-img-top" src={gift.imageUrl} style={{ width: '220px', height: '200px' }} />
                            </a>
                            <div className="card-body" style={{ padding: '17px 5px 13px' }}>
                                <div className="col-10 truncate" style={{ paddingRight: '0', textAlign: 'left', color: '#404040', lineHeight: '19px' }}>
                                    <h5 className="card-title " style={{ fontSize: '17px', fontWeight: 'bold' }}>{gift.title}</h5>
                                    <p className="card-text" style={{ fontSize: '13px', margin: '0' }}>Starting From</p>
                                    <p className="card-text" style={{ fontSize: '13px', margin: '0', fontWeight: 'bold' }}>
                                        ₹ {gift.price}
                                    </p>
                                </div>
                                <div className="button-group">
                                    <button className="btn btn-primary mt-3" style={{ width: '100%' }}>Add to Cart</button>
                                    <button className="btn btn-primary mt-2" style={{ width: '100%',backgroundColor:'red' }}>Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;