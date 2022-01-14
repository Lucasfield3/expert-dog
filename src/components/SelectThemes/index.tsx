 import * as React from 'react';
import { ChangeThemesContext } from '../../context/ChangeThemes';
import styles from '../../styles/components/selectThemes.module.scss'

type Props = {
    
};
export const SelectThemes = (props: Props) => {

    const { ChangeTheme } = React.useContext(ChangeThemesContext)

    return (
        <>
            <select className={styles.customSelect} onChange={(e)=> ChangeTheme(e)}>
                <option value="padrao">padrao</option>
                <option value="roxo-branco-gardiente">roxo-branco-gardiente</option>
                <option value="roxo-preto-gradiente">roxo-preto-gradiente</option>
                <option value="roxo-preto-branco">roxo-preto-branco</option>
                <option value="branco-vermelho-gradiente">branco-vermelho-gradiente</option>
                <option value="branco-vermelho">branco-vermelho</option>
                <option value="branco-vermelho-roxo">branco-vermelho-roxo</option>
                <option value="branco-vermelho-roxo-gradiente">branco-vermelho-roxo-gradiente</option>
            </select>
        </>
    );
};