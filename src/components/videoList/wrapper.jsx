import React, {useState, useEffect} from 'react';
import wrapIcon from '../../media/wrap.png'
import '../Style.css';


const Wrapper = props => {
    //Props
    const {
        components,
        name,
    } = props;

    /*##################### HOOOKS #####################*/
    //Wrap setting
    const [wrap, setWrap] = useState(false);
    const wrapElements = () => {
        setWrap(!wrap);
    }
    //Wrap Content
    const [wrapContent, setWrapContent] = useState(null);
    useEffect(() => {
        if (!wrap)
            setWrapContent(components);
        else
            setWrapContent(null);
        // eslint-disable-next-line
    }, [wrap, components]);
    
    //Render
    return (
        <div className="Wrapper">
            {components.props.children.length > 0 ? 
                <div className="WrapperInfo" onClick={() => wrapElements()}>
                    <img className={!wrap ? "WrapperIcon" : "WrapperIcon WrapperIconRotate"} src={wrapIcon} alt={"wrapIcon"}/>
                    <label><b>{name}</b></label>
                </div>
                :
                null
            }
            {wrapContent}
        </div>
    );
}

export default Wrapper;