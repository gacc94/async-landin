const API = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=9`

const content = null || document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'X-CACHEBYPASS': 'UCRRtRg9N0R0WHZcyPZGiLKg',
        'X-RapidAPI-Key': '2610c9f91cmshca1548d5deab289p1a4160jsn38b3fc9025af',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async()=>{
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map( video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-rounded-md overflow-hidden group-hover:opacity-7lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolutinset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0,5).join('')}
            
        `;

        content.innerHTML = view


    } catch (error) {
        console.log(error);
    }
})(); 