import { useState } from 'react';

export default function Shop() {
  const [selectedImage, setSelectedImage] = useState({});

  // Liste des produits
  const products = [
    {
      id: 1,
      title: 'T-shirt noir JAB CONNEXION',
      category: 'Vêtements',
      images: [
        '/Boutique/t-shirt noir/t-shirt-noir-1.png',
        '/Boutique/t-shirt noir/t-shirt-noir-2.png'
      ]
    },
    {
      id: 2,
      title: 'T-shirt blanc JAB CONNEXION',
      category: 'Vêtements',
      images: [
        '/Boutique/t-shirt blanc/t-shirt-blanc-1.png',
        '/Boutique/t-shirt blanc/t-shirt-blanc-2.png'
      ]
    },
    {
      id: 3,
      title: 'Gants MMA',
      category: 'Equipement',
      stock: 'non disponible',
      images: [
        '/Boutique/gants/gants-1.png',
        '/Boutique/gants/gants-2.png'
      ]
    }
  ];

  const handleImageChange = (productId, imageIndex) => {
    setSelectedImage({ ...selectedImage, [productId]: imageIndex });
  };

  return (
    <div>

      {/* Produits */}
      <section className="section bg-mist-50">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-semibold tracking-tight text-mist-950 mb-6 leading-none">
              Boutique JAB CONNEXION
            </h1>
            <p className="text-xl text-mist-600 max-w-3xl mx-auto">
              Découvrez nos produits exclusifs et devenez ambassadeur de JAB CONNEXION
            </p>
          </div>
        </div>
        <br></br>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const currentImageIndex = selectedImage[product.id] || 0;

              return (
                <div key={product.id} className="card">
                  {/* Images du produit */}
                  <div className="mb-6">
                    <div className="aspect-square bg-mist-100 rounded-xl overflow-hidden mb-4">
                      <img
                        src={product.images[currentImageIndex]}
                        alt={`${product.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Miniatures */}
                    <div className="flex gap-2">
                      {product.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => handleImageChange(product.id, index)}
                          className={`flex-1 aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                            currentImageIndex === index
                              ? 'border-primary'
                              : 'border-mist-200 hover:border-mist-400'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${product.title} - Miniature ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Informations du produit */}
                  <div>
                    <span className="badge mb-3 inline-block">{product.category}</span>
                    
                    <h3 className="text-2xl font-display font-semibold text-mist-950 mb-4">
                      {product.title}
                    </h3>
                    {product.stock && (
                      <span className="badge-red mb-3 inline-block">
                        {product.stock}
                      </span>
                    )}
                    {!product.stock && (
                      <a
                        href="/contact"
                        className="btn-secondary w-full text-center"
                      >
                        Réserver à l'accueil
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white border-y border-mist-200">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-mist-950 mb-6">
              Vous souhaitez commander ?
            </h2>
            <p className="text-lg text-mist-600 mb-10">
              Contactez-nous pour plus d'informations sur nos produits et disponibilités
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary-orange">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
