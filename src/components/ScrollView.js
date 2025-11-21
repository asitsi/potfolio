import React from 'react';

const productStyle = {
    display: "inline-grid",
    gap: "1.5rem",
    justifyItems: "center",
};

const getGridTemplateColumns = () => {
    const width = window.innerWidth;
    if (width > 1200) {
        return "auto auto auto auto"; // 4 columns for large screens
    } else if (width > 800) {
        return "auto auto auto"; // 3 columns for medium screens
    } else if (width > 600) {
        return "auto auto"; // 2 columns for small screens
    } else {
        return "auto"; // 1 column for very small screens
    }
};

const ScrollView = ({ children }) => {
    const [columns, setColumns] = React.useState(getGridTemplateColumns());

    React.useEffect(() => {
        const handleResize = () => {
            setColumns(getGridTemplateColumns());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ ...productStyle, gridTemplateColumns: columns }}>
            {children}
        </div>
    );

};

export default ScrollView