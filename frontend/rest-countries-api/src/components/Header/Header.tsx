import * as S from './styles'
import iconDark from '../../images/icon-moon.svg'
import inconLight from '../../images/icon-sun.svg'
import { useMode } from '../../context/ModeStyleContext'


const Header = () => {
    const {mode, setMode} = useMode()

    return (
        <S.Container mode={mode}>
            <div className="leftHeader">
                <h3>
                    Where in the world?
                </h3>
            </div>
            <div className="rightHeader">
                <S.LightMode mode={mode}>
                    <div className="iconSun">
                        <img src={inconLight} onClick={() => setMode(prev => !prev)}/> Light Mode
                    </div>
                </S.LightMode>
                <S.DarkMode mode={mode}>
                    <div className="iconMoon">
                        <img src={iconDark} onClick={() => setMode(prev => !prev)} />Dark Mode
                    </div>
                </S.DarkMode>
            </div>
        </S.Container>
    )
}

export default Header