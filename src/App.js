import React  from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage/HomePage';
import {Route , Switch , Redirect  } from 'react-router-dom';
import Header from './header/header'
import SigninSignout from './SigninSingnout/SigninSignout'
import {auth , createUserProfil} from './GoogleAth/SignInWithGoogel'
import {setCurrentUser} from './redux/user/user.action';
import {connect} from 'react-redux'
import CartCheckout from './checkout-component/checkout';
import CollectionOverview from './collection-overview/collection-overview';



class App extends React.Component {
    
    unsubscripFromAuth = null;
    
    componentDidMount(){
        const {setCurrentUser} = this.props
        this.unsubscripFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
                const userRef = await createUserProfil(userAuth);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        
                            id : snapshot.id,
                            ...snapshot.data()
                        
                    });
                });
    }else{setCurrentUser(userAuth)}
});
    }
    componentWillAmount(){
        this.unsubscripFromAuth();
    }
    render(){
        return ( 
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component = {HomePage}/>
                    <Route   path='/Shop' component = {CollectionOverview}/>
                    <Route   path='/Checkout' component = {CartCheckout}/>                    
                    <Route   path='/SignIn' render={() => this.props.currentUser ? (<Redirect to='/'/>):(<SigninSignout />)}/>
                </Switch>
                
            </div>
        )
    
        
        };
}
const mapDispatchToProps = dispatch =>({
    setCurrentUser : user => dispatch(setCurrentUser(user))
})
const mapStateToProps = ({user}) => ({
    currentUser : user.currentUser
})

export default connect( mapStateToProps , mapDispatchToProps)(App) ;


