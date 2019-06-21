import {mxFirebase} from "./mx";
import "./mx.css";
import "./index.css";
import riot from "riot";
import "./tags/signin.tag";
import"./tags/homepage.tag";
import"./tags/upload.tag";
import route from "riot-route";

var firebaseConfig = {
    apiKey: "AIzaSyBwB5WrhXnBY2GP_JQcNxP_5PDgd5SRbks",
    authDomain: "xcamp-2019.firebaseapp.com",
    databaseURL: "https://xcamp-2019.firebaseio.com",
    projectId: "xcamp-2019",
    storageBucket: "xcamp-2019.appspot.com",
    messagingSenderId: "561091165755",
    appId: "1:561091165755:web:cf09c1482685d5c8"
  };
  mxFirebase.init(firebaseConfig);

route.base("/");

route("/signin", () =>{
    const signin = riot.mount("div#root","signin");
    document.getElementById("sign-in-form").addEventListener("submit" ,async (e)=> {
        e.preventDefault(); //preventDefault() tra mang neu ko hieu
        const email = document.getElementById("email").value; 
        const password = document.getElementById("password").value;
        try{ 
            await mxFirebase.signIn(email,password);
            window.location.href = "/home"
        }
        catch(err) {
            document.getElementById("error-message").innerText = err.message
        }
    });     
});

// route.base("/");
// route("/home",() =>{
//     const homepage = riot.mount("div#root","homepage");
// });

route.base("/");
route("/upload",() =>{
    const upload = riot.mount("div#root","upload");
    document.getElementById("upload-form").addEventListener("submit",async (e)  =>{
        e.preventDefault();
        const emotion = document.querySelector('input[name=emotion]:checked').value
        const title = document.getElementById("title").value;
        const files = [];
        document.querySelectorAll("input[type=file]").forEach(element=>{
            if (element.files[0]){
                files.push(element.files[0]);
            }
        });
        const category = document.getElementById("category").value
        console.log(emotion);
        console.log(title);
        console.log(files);
        console.log(category);
        const filesUrls = await mxFirebase.putFiles(files);
        console.log(filesUrls);
        const r = await mxFirebase.collection('product').save({
             emotion,
             filesUrls,
             title,
             category
        });
    console.log(r)
    });

});

route('/home..', async ()  => {
    const query = route.query()
    const products = await mxFirebase.collection('product').getAll();
    console.log(products)
    // const name = "dc"
    // const arr = [1,2,3,4,5]

    const opts = {
        products: products
    
    }
   const homepage = riot.mount("#root","homepage",opts)


});

route.start(true);