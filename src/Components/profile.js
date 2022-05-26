import Reacr ,{Component} from 'react';
import './profile.css';
import img1 from '.././images/team1.webp';
import img2 from '.././images/team2.webp';
import img3 from '.././images/team3.webp';

class Profile extends Component{
    render(){
        return(
            <div>
           <h1 className='head'>فريق العمل</h1>
           <section className="team row">

                <div className="sec col-md-4 col-sm-12">
                    <img  src={img2} alt=""/>
                    <p>السيد علي</p>
                    <span>عضو مؤسس</span>
                </div> 

                <div className=" sec diff col-md-4 col-sm-12">
                    <img src={img1} alt=""/>
                    <p>محمد احمد</p>
                    <span>رئيس مجلس الادارة</span>
                </div> 

                <div className="sec col-md-4 col-sm-12">
                    <img src={img3} alt=""/>
                    <p>محمود خالد</p>
                    <span>عضو فاعل</span>
                </div> 

           </section>
            </div>
        )
    }
}
export default Profile;