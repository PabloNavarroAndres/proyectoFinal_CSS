function loadVideo() {
    let placeholder = document.getElementById('video-placeholder');

    // Reemplazo el iframe fachada con el real
    placeholder.innerHTML = '<iframe src="https://www.youtube.com/embed/-oL60bSwOA4?si=JNSxcODbbhl8M9CH&autoplay=1" title="The importance of Fashion in Society (Yt video)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
}
