import AuthForm from "../components/AuthForm";

function AuthenticationPage(){
    return <AuthForm/>;

}
export default AuthenticationPage;
 
export async function action({request}){
    //We can't use useSearchParams here bec we are not in a component
    const searchParams=new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';
    if(mode!=='login' && mode!=='signup'){
        throw json({message:"Unsupported user"},{status:422});
    }
    const data=await request.formData();
    const authData={
        email:data.get('email'),
        password:data.get('password')
    }
    const response=await fetch('http://localhost:4000/'+mode,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(authData)
    });
    if(response.status===401 || response.status===422){
        return response;
    }
    if(!response.ok){
        throw json({message:"Could not be authenticated"},{status:500});
    }
}