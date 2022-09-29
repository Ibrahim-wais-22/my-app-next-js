import Card from './card';

function Body(){
    return(
        <div className='Body'>
            <div className="group-btns">
                <div className="button-head">
                    <p className="button-name"> مستلزمات التجميل</p>
                    <img src="/beauty-tools-concept-3d-illustration-icon-composition-with-blackboard-with-curling-iron-vector_9209-9241.jpg" alt="" />
                </div>
                <div className="button-head">
                    
                    <p className="button-name">الملابس الجاهزه</p>
                    <img src="/old-wardrobe-clothes-icon-cartoon-style-vector-36842358.jpg" alt="" />
                    
                </div>
                <div className="button-head">
                    <p className="button-name">الاحذية الراقية</p>
                    <img src="/cute-shoe-icon-free-vector.jpg" alt="" />
                </div>
                <div className="button-head">
                    <p className="button-name">الماركات العالمية</p>
                    <img src="/logo-brand-clothing-on-a-white-background-vector-22770200.jpg" alt="" />
                </div>
            </div>
            <div className="card-groub">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}
export default Body