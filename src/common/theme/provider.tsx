import React from 'react';
import { ThemeContext } from './context';

interface ThemeProviderProps {
    children: JSX.Element
}

interface ThemeProviderState {
    theme: string
}

class ThemeProvider extends React.Component<ThemeProviderProps, ThemeProviderState>{
    constructor(props: ThemeProviderProps) {
        super(props);
        this.state = { theme: 'light' };
        this.toggleTheme = this.toggleTheme.bind(this)

    }

    toggleTheme() {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        });
    }

    render() {
        return (
            <ThemeContext.Provider value={{mode: this.state.theme, handleToggle : this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
export default ThemeProvider;