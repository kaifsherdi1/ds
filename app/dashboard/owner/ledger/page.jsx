import Sidebar from '@/components/Sidebar';

export default function LedgerPage() {
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
            <h1 className="mb-30">Digital Udhar Ledger</h1>
            
            <div className="row mb-30">
                <div className="col-12">
                     <div className="bg-white p-30 d-flex justify-content-between align-items-center" style={{backgroundColor: 'white', borderRadius: '10px', border: '1px solid #eee'}}>
                        <div>
                            <h4 style={{color: '#6A6A6A'}}>Total Receivable</h4>
                            <h2 style={{color: '#E53935'}}>₹45,800</h2>
                        </div>
                        <button className="rr-btn">Record New Payment</button>
                     </div>
                </div>
            </div>

            <div className="bg-white p-30" style={{backgroundColor: 'white', borderRadius: '10px', border: '1px solid #eee'}}>
                <div className="d-flex justify-content-between align-items-center mb-20">
                    <h3>Customer Balances</h3>
                    <input type="text" placeholder="Search Customer..." style={{padding: '10px', border: '1px solid #ddd', borderRadius: '5px'}} />
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Outstanding</th>
                            <th>Last Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Rajesh Jha</strong></td>
                            <td>9876543210</td>
                            <td><span style={{color: 'red'}}>Overdue</span></td>
                            <td>₹4,500</td>
                            <td>15 Oct 2024</td>
                            <td><button className="rr-btn" style={{padding: '5px 10px', fontSize: '12px'}}>View History</button></td>
                        </tr>
                        <tr>
                            <td><strong>Vikram Singh</strong></td>
                            <td>9112233445</td>
                            <td><span style={{color: 'orange'}}>Active Credit</span></td>
                            <td>₹1,200</td>
                            <td>Today</td>
                            <td><button className="rr-btn" style={{padding: '5px 10px', fontSize: '12px'}}>View History</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}
