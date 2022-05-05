import axios from "axios";

const PQ_BASE_URL = "https://api.predicthq.com/v1/events/"
const TOKEN = "Cedie2PnY-nuzooEmGacOBjcg4xJC7IRR1ZtqaYR"
const API_KEY = "AIzaSyDYEOuQkFaSDGsqukBiW08cIpRA8eSMa1o"
const PEXEL_URL = "https://api.pexels.com/v1/"
const GOOGLE_GEO_BASE = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDYEOuQkFaSDGsqukBiW08cIpRA8eSMa1o&latlng=40.714224,-73.961452"
const PEXEL = "563492ad6f917000010000013f9a48d407d7451d827b38339c62c8d9"
const TM_KEY = "FJR0COcICVMU1pEXlQSsAlE0JGKuo32Q"
const TK_SC = "IuJoymCMIV1tUoz0"
const TM_URL = "https://app.ticketmaster.com/discovery/v2/events?"

const pq_config = {
    headers: {
        "Authorization": "Bearer " + TOKEN,
        "Accept": "application/json"
    }
}

const px_config = {
    headers: {
        "Authorization": PEXEL,
    }
}

export const searchByString = async (query) => {
    const res = await axios.get(PQ_BASE_URL, {
        ...pq_config,
        params: {
            "q": query,
            "limit": 24,
        }
    })

    return res.data.results
}


export const getPexelPhoto = async (term) => {
    const res = await axios.get(`${PEXEL_URL}/search`, {
        ...px_config,
        params: {
            "query": term
        }
    })
    return res.data.photos[0].src.original

}

export const getTMEvent = async (term) => {
    let n_term = term.replaceAll(" ", "%20")
    const res = await axios.get(`${TM_URL}apikey=${TM_KEY}&keyword=${n_term}`)
    return res.data._embedded.events
}

export const getTMEventById = async (id) => {
    const res = await axios.get(`${TM_URL}apikey=${TM_KEY}&id=${id}`)
    return res.data._embedded.events
}