
import Serializer from '../serializer'

const UsersSerializer = {
    ...Serializer,

    get(video) {
       return this.serialize(video)
    },

    getAll(video){
       return video.map(video => this.serialize(video)) 
    },

    create(video){
        return this.serialize(video)
    },

    serialize(video) {
          const { _id, discription, url, title } = video
        return { _id, discription, url, title }
    }
}

export default UsersSerializer