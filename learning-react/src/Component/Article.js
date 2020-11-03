import React from 'react'


export default class Article extends React.Component {
    static getDerivedStateFromProps(props,state){
        console.log("[Article.ks] getDerivedStateFromProps")
        return  null;
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("[Article.js] shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("[Article.js] getSnapshotBeforeUpdate")
        return {x:0, y:0}
    }
    componentDidUpdate(prevProps,prevState,snapShot){
        console.log("[Article.js] componentDidUpdate",snapShot);
    }
    render() {
        return (
            <div>
               {this.props.article}
               
            </div>
        )
    }
}
