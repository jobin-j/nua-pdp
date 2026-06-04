import styles from './ColourSwatches.module.scss';

const ColourSwatches = ({ colours, selectedColour, onColourChange }) => {
    return (
        <div className={styles.swatches}>
            {colours.map((colour) => (
                <button
                    key={colour}
                    onClick={() => onColourChange(colour)}
                    className={`${styles.swatch} ${selectedColour === colour ? styles.active : ''}`}
                    style={{ backgroundColor: colour.toLowerCase() }}
                />
            ))}
        </div>
    );
}

export default ColourSwatches;