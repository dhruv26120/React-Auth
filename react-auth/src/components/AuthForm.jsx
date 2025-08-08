import {Form, Link, useSearchParams,useActionData} from 'react-router-dom';
import classes from './AuthForm.module.css'
function AuthForm(){
    const data=useActionData();
    const [searchParams,setSearchParams]=useSearchParams();
    const isLogin=searchParams.get('mode')==='login';


    // const[isLogin,setIsLogin]=useState(true);
    // function switchAuthHandler(){
    //     setIsLogin=((isCurrentlyLogin)=>!isCurrentlyLogin);

    // }
    return(
        <> 
        <Form method="post" className={classes.form}>
            <h1>
                {isLogin?"Login":"Create New User"}

            </h1>
            {data && data.errors && <ul>
                {Object.values(data.error).map(err=><li key={err}>{err}</li>)}
                </ul>}
            <p>
                <label htmlfor='email'>Email</label>
                <input type="email" name="email"/>
            </p>
            <p>
                <label htmlfor='image'>Password</label>
                <input type="password" name="password"/>
            </p>
            <div className={classes.actions}>
                {/* <button onClick={switchAuthHandler} type="button">
                    {!isLogin?"Login":"Register"}
                </button> */}
                <Link to={`?mode=${isLogin?'signup':'login'}`}>
                    {isLogin?'Create new User':'Login'}
                </Link>
                <button>Save</button>
            </div>
        </Form>
        </>
    );
}
export default AuthForm;