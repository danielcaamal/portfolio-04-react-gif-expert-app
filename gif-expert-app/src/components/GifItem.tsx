export const GifItem = (
    { id, title, url }: { id: string; title: string; url: string}
    ) => {

    const getTitle = title.trim() != "" ? title : "N/A";

    return (
        <div className="card">
            <img src={url} alt={title} id="gif-item-img"/>
            <p id="gif-item-title">{getTitle}</p>
        </div>
    );
}