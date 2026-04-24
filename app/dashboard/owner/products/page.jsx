'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import { getProducts, createProduct, updateProduct, deleteProduct } from './actions';

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sourceType, setSourceType] = useState('url'); // 'url' or 'upload'
    const [previewUrl, setPreviewUrl] = useState(null);

    const menuItems = [
        { name: 'Dashboard', icon: 'fas fa-home', link: '/dashboard/owner' },
        { name: 'Products', icon: 'fas fa-box', link: '/dashboard/owner/products' },
        { name: 'Orders', icon: 'fas fa-shopping-cart', link: '/dashboard/owner/orders' },
        { name: 'Udhar Ledger', icon: 'fas fa-book-open', link: '/dashboard/owner/ledger' },
        { name: 'Customers', icon: 'fas fa-users', link: '/dashboard/owner/customers' },
        { name: 'Settings', icon: 'fas fa-cog', link: '/dashboard/owner/settings' },
        { name: 'Logout', icon: 'fas fa-sign-out-alt', link: '/logout' },
    ];

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
    }

    const handleEdit = (product) => {
        setEditingProduct(product);
        setSourceType('url');
        setPreviewUrl(product.image);
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this product?')) {
            await deleteProduct(id);
            fetchProducts();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        if (editingProduct) {
            formData.append('id', editingProduct.id);
            await updateProduct(formData);
        } else {
            await createProduct(formData);
        }
        
        setIsModalOpen(false);
        setEditingProduct(null);
        setPreviewUrl(null);
        fetchProducts();
    };

    return (
        <div style={{display: 'flex', backgroundColor: '#F8FFF8', minHeight: '100vh'}}>
            <Sidebar items={menuItems} />
            <div style={{marginLeft: '280px', padding: '40px', flexGrow: 1}}>
                <div className="d-flex justify-content-between align-items-center mb-30">
                    <h1>Manage Products</h1>
                    <button className="rr-btn" onClick={() => { 
                        setEditingProduct(null); 
                        setSourceType('url');
                        setPreviewUrl(null);
                        setIsModalOpen(true); 
                    }}>
                        <i className="fas fa-plus me-2"></i> Add New Product
                    </button>
                </div>

                <div className="bg-white p-30" style={{backgroundColor: 'white', borderRadius: '10px', border: '1px solid #eee'}}>
                    {loading ? (
                        <p>Loading products...</p>
                    ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Created</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td>
                                            <img src={product.image || '/assets/imgs/what-we-do/what-we-do__item-1.png'} 
                                                 alt="" style={{width: '40px', height: '40px', borderRadius: '4px', objectFit: 'cover'}} />
                                        </td>
                                        <td><strong>{product.name}</strong></td>
                                        <td><span className="badge bg-light text-dark">{product.category}</span></td>
                                        <td>₹{product.price}</td>
                                        <td>{new Date(product.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(product)}>
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(product.id)}>
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {products.length === 0 && (
                                    <tr>
                                        <td colSpan="6" className="text-center py-4">No products found. Add your first product!</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* Product Modal */}
            {isModalOpen && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 9999, display: 'flex',
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
                    padding: '60px 20px', overflowY: 'auto'
                }}>
                    <div style={{
                        backgroundColor: 'white', maxWidth: '650px', width: '100%', 
                        borderRadius: '15px', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                        position: 'relative'
                    }}>
                        <button onClick={() => setIsModalOpen(false)} style={{
                            position: 'absolute', top: '20px', right: '20px', border: 'none', 
                            background: '#f5f5f5', width: '35px', height: '35px', borderRadius: '50%',
                            fontSize: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>&times;</button>

                        <h2 className="mb-30" style={{fontSize: '24px', fontWeight: '700', color: '#15181B'}}>
                            {editingProduct ? 'Edit Product' : 'Add New Product'}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-12 mb-20">
                                    <label style={{display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#4b5563'}}>Product Name</label>
                                    <input name="name" type="text" required defaultValue={editingProduct?.name} 
                                        style={{width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f9fafb', outline: 'none'}} />
                                </div>
                                <div className="col-md-6 mb-20">
                                    <label style={{display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#4b5563'}}>Category</label>
                                    <input name="category" type="text" required defaultValue={editingProduct?.category}
                                        style={{width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f9fafb'}} placeholder="e.g. Snacks" />
                                </div>
                                <div className="col-md-6 mb-20">
                                    <label style={{display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#4b5563'}}>Price (₹)</label>
                                    <input name="price" type="number" step="0.01" required defaultValue={editingProduct?.price}
                                        style={{width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f9fafb'}} />
                                </div>
                                <div className="col-md-12 mb-20">
                                    <label style={{display: 'block', marginBottom: '15px', fontSize: '14px', fontWeight: '600', color: '#4b5563'}}>
                                        Product Image
                                    </label>
                                    
                                    <div style={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
                                        <button type="button" 
                                            onClick={() => setSourceType('url')}
                                            style={{
                                                padding: '8px 15px', borderRadius: '6px', fontSize: '13px', cursor: 'pointer',
                                                border: '1px solid #e2e8f0',
                                                backgroundColor: sourceType === 'url' ? '#2E7D32' : 'white',
                                                color: sourceType === 'url' ? 'white' : '#64748b',
                                                fontWeight: '600'
                                            }}>Image URL</button>
                                        <button type="button" 
                                            onClick={() => setSourceType('upload')}
                                            style={{
                                                padding: '8px 15px', borderRadius: '6px', fontSize: '13px', cursor: 'pointer',
                                                border: '1px solid #e2e8f0',
                                                backgroundColor: sourceType === 'upload' ? '#2E7D32' : 'white',
                                                color: sourceType === 'upload' ? 'white' : '#64748b',
                                                fontWeight: '600'
                                            }}>Upload File</button>
                                    </div>

                                    {sourceType === 'url' ? (
                                        <input name="image" type="text" defaultValue={editingProduct?.image}
                                            style={{width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f9fafb'}} placeholder="Link to product image (HTTPS)" />
                                    ) : (
                                        <div style={{
                                            border: '2px dashed #e2e8f0', borderRadius: '10px', padding: '20px', textAlign: 'center',
                                            backgroundColor: '#f9fafb', position: 'relative'
                                        }}>
                                            <input name="file" type="file" accept="image/*" 
                                                style={{position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%'}} 
                                                onChange={(e) => {
                                                    const file = e.target.files[0];
                                                    if (file) setPreviewUrl(URL.createObjectURL(file));
                                                }}
                                            />
                                            {previewUrl ? (
                                                <img src={previewUrl} alt="Preview" style={{maxHeight: '150px', borderRadius: '8px'}} />
                                            ) : (
                                                <div>
                                                    <i className="fas fa-cloud-upload-alt mb-10" style={{fontSize: '30px', color: '#64748b'}}></i>
                                                    <p style={{fontSize: '14px', color: '#64748b', margin: 0}}>Click or drag to upload image</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-12 mb-30">
                                    <label style={{display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#4b5563'}}>Description</label>
                                    <textarea name="description" rows="3" defaultValue={editingProduct?.description}
                                        style={{width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f9fafb', minHeight: '100px'}}></textarea>
                                </div>
                            </div>
                            
                            <div className="d-flex gap-15 mt-10">
                                <button type="submit" className="rr-btn flex-grow-1" style={{padding: '15px', borderRadius: '10px', fontSize: '16px'}}>
                                    {editingProduct ? 'Update Product' : 'Create Product'}
                                </button>
                                <button type="button" onClick={() => setIsModalOpen(false)} 
                                    style={{padding: '15px 25px', borderRadius: '10px', border: '1px solid #e2e8f0', backgroundColor: 'transparent', color: '#64748b', fontWeight: '600'}}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
