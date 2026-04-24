import Sidebar from '@/components/Sidebar';

export default function OwnerDashboard() {
  const menuItems = [
    { name: 'Dashboard', icon: 'fas fa-home', link: '/dashboard/owner' },
    { name: 'Products', icon: 'fas fa-box', link: '/dashboard/owner/products' },
    { name: 'Orders', icon: 'fas fa-shopping-cart', link: '/dashboard/owner/orders' },
    { name: 'Udhar Ledger', icon: 'fas fa-book-open', link: '/dashboard/owner/ledger' },
    { name: 'Customers', icon: 'fas fa-users', link: '/dashboard/owner/customers' },
    { name: 'Settings', icon: 'fas fa-cog', link: '/dashboard/owner/settings' },
    { name: 'Logout', icon: 'fas fa-sign-out-alt', link: '/logout' },
  ];

  return (
    <div style={{display: 'flex', backgroundColor: '#F8FFF8', minHeight: '100vh'}}>
        <Sidebar items={menuItems} />
        <div style={{marginLeft: '280px', padding: '40px', flexGrow: 1}}>
            <h1 className="mb-30">Store Owner Dashboard - Sharma Kirana</h1>
            
            <div className="row">
                <div className="col-md-4 mb-30">
                    <div className="p-30 bg-white" style={{border: '1px solid #eee', borderRadius: '10px', backgroundColor: 'white'}}>
                        <h4 style={{color: '#6A6A6A'}}>Total Products</h4>
                        <h2 style={{color: '#2E7D32'}}>245</h2>
                    </div>
                </div>
                <div className="col-md-4 mb-30">
                    <div className="p-30 bg-white" style={{border: '1px solid #eee', borderRadius: '10px', backgroundColor: 'white'}}>
                        <h4 style={{color: '#6A6A6A'}}>New Orders</h4>
                        <h2 style={{color: '#2E7D32'}}>12 Today</h2>
                    </div>
                </div>
                <div className="col-md-4 mb-30">
                    <div className="p-30 bg-white" style={{border: '1px solid #eee', borderRadius: '10px', backgroundColor: 'white'}}>
                        <h4 style={{color: '#6A6A6A'}}>Outstanding Udhar</h4>
                        <h2 style={{color: '#E53935'}}>₹12,450</h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-8">
                    <div className="bg-white p-30" style={{backgroundColor: 'white', borderRadius: '10px', border: '1px solid #eee'}}>
                        <h3 className="mb-20">Recent Sales via WhatsApp</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Customer</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Aashirvaad Atta x 2</td>
                                    <td>Rajesh Kumar</td>
                                    <td>₹490</td>
                                    <td><span style={{color: 'green'}}>Delivered</span></td>
                                </tr>
                                <tr>
                                    <td>Amul Milk x 4</td>
                                    <td>Sunita Devi</td>
                                    <td>₹216</td>
                                    <td><span style={{color: 'blue'}}>Out for Delivery</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="bg-white p-30" style={{backgroundColor: 'white', borderRadius: '10px', border: '1px solid #eee', height: '100%'}}>
                        <h3 className="mb-20">Recent Ledger Entries</h3>
                        <ul className="list-unstyled">
                            <li className="mb-15 pb-10" style={{borderBottom: '1px solid #eee'}}>
                                <p className="mb-0"><strong>Rajesh Jha</strong> paid ₹500</p>
                                <span style={{fontSize: '12px', color: '#6A6A6A'}}>Today, 2:15 PM</span>
                            </li>
                            <li className="mb-15 pb-10" style={{borderBottom: '1px solid #eee'}}>
                                <p className="mb-0"><strong>Vikram Singh</strong> took ₹1,200 Credit</p>
                                <span style={{fontSize: '12px', color: '#6A6A6A'}}>Today, 11:30 AM</span>
                            </li>
                        </ul>
                        <button className="rr-btn w-100">Add Entry</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
