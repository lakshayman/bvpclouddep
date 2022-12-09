export default ({name, desc, rev, image}) => {
    return (
        <div className="Student__container" style={rev ? {flexDirection: 'row-reverse'}:{}}>
          <div className="Student__imageContainer">
            <img src={image} alt="image" height="100%" width="100%" style={{borderRadius: "25px"}}/>
          </div>
          <div className="Student__textContainer">
            <p className="Student__textName">{name}</p>
            <p className="Student_desc">{desc}</p>
          </div>
        </div>
    );
}