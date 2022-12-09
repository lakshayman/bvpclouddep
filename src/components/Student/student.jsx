export default ({name, desc, rev}) => {
    return (
        <div className="Student__container" style={rev ? {flexDirection: 'row-reverse'}:{}}>
          <div className="Student__imageContainer"></div>
          <div className="Student__textContainer">
            <p className="Student__textName">{name}</p>
            <p className="Student_desc">{desc}</p>
          </div>
        </div>
    );
}