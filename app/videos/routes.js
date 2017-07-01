
import controller from './controller';
export function  setup(router){
    router
        .get('/:id', controller.get)
        .get('/', controller.getAll)
        .post('/', controller.create)
        .put('/:id', controller.update)
        .delete('/:id', controller.destroy)

}
