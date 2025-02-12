

import HomePage from "../pages/home.page";
import AboutPage from "../pages/about.page";
import ContactPage from "../pages/contact.page";
import FormValidate from "../challanges/formValidate.challange";
import UserItem from "../components/UserItem.component";
import PostList from "../components/postList.component";
import PostItem from "../components/postItem.component";
import ListOpt from "../challanges/listOpt.challange"
import FactorialCalculator from "../challanges/FactorialCalculator.challange"
import Parent from "../challanges/ParentCHiled.challange";
import DebouncedSearch from "../challanges/debouncer.challange";
const RoutesConfig = [
 { path: "/home" , element: <HomePage /> },
  { path : "/about" , element: <AboutPage /> },
  { path : "/contact", element: <ContactPage />},   
  { path: "/formVAlidate", element:<FormValidate />},
  // user : router | userId : parametre 
  { path : "/user/:userId", element:<UserItem />},
  // postList
  { path : "/posts" , element: <PostList />},
  // posts/postId
  { path: "/post/:postId", element: <PostItem />},
  // list rendring optimization :
  { 
    path : "/list-optimization", element: <ListOpt />
  },
  {
    path:"/factorial-memorize" , element:<FactorialCalculator />
  },
  {
    path:"/props-memo" , element:<Parent />
  },
  {
    path: "/debouncer", element: <DebouncedSearch />
  }

];


export default RoutesConfig;