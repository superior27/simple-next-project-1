import If from "../../components/IF";

export default function Page(){
    
    const value = Math.floor(Math.random()*100);
    return(
        <div>
            <If test={(value % 2 == 0)}>
                <h1>{value}, its even!</h1>
            </If>
            <If test={(value % 2 == 1)}>
                <h1>{value}, its odd!</h1>
            </If>
        </div>
    );
}