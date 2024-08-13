import classNames from 'classnames'
import React, { createElement } from 'react'
import PropTypes from 'prop-types';

function Button({size, children}) {
  return createElement('button',{
    className:classNames("bg-[#1d9bf0] rounded-full flex justify-center items-center font-bold",{
         "px-4 h-9":size==='normal',
          "px-4 text-[17px] h-[42px] w-full":size==='large'
    })
  },children)
}
Button.PropTypes={
    size:PropTypes.oneOf(['normal', 'large'])
}

Button.defaultProps={
    size:'normal'
}
export default Button