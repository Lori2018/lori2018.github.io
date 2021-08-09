import Image from 'next/image';

export default function Watch() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <h1 className="h1-title">Your Watch List</h1>
          <div className="product-container">
              <h2 className="product-name">Product Name</h2>
              <p className="product-description">This is where you put information about the product.</p>
              <Image src={"https://images.unsplash.com/photo-1584680226833-0d680d0a0794?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"} width="100px" height="100px" className="watch-img" />
          </div>
        </div>
        <div className="col-6">
          <h1 className="h1-title">Similar Products</h1>
          <div className="product-container">
              <h2 className="product-name">Product Name</h2>
              <p className="product-description">This is where you put information about the product.</p>
              <Image src={"https://images.unsplash.com/photo-1584680226833-0d680d0a0794?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"} width="100px" height="100px" className="watch-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
