import clasess from './Notification.module.css';

const Notification = (props) => {
    let specialClasses = '';

    if(props.status === 'error') {
        specialClasses = clasess.error;
    }

    if(props.status === 'success') {
        specialClasses = clasess.success;
    }

    const cssClasses = `${clasess.notificaton} ${specialClasses}`;

    return (
        <section className={cssClasses}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    );
};

export default Notification;