<homepage>
    <div>
        <ul>
            <li><a href="hom?category=Accessories">Accessories</a></li>
            <li><a href="hom?category=Boys Stuff">Boys Stuff</a></li>
            <li><a href="hom?category=Bridal">Bridal</a></li>
            <li><a href="hom?category=Girls Stuff">Girls Stuff</a></li>
            <li><a href="hom?category=Jewelry">Jewelry</a></li>
            <li><a href="hom?category=Weird Stuff">Weird Stuff</a></li>
            <li><a href="hom?category=Random Stuff">Random Stuff</a></li>
        </ul>
    </div>
    <h3>All Product</h3> 
    <div each = "{product in opts.products}">
        <img src="{product.filesUrls[0]}" alt="">
        <p>{product.title}</p>
        <p>{product.category}</p>
        <img src= "./assets/{product.emotion}.png" alt="">
    </div>
</homepage>