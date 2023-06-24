import style from '../GaleryList/GaleryList.module.css';

export const GaleryList = ({galery}) =>{
    return (
        <div className={style.container}>
            <img src={galery.avatar} alt={galery.name} />
            {/* <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" /> */}
        </div>
    )

}