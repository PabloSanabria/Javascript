import { RenderAddButtons } from "./presentation/render-add-button/render-add-button";
import { RenderButtons } from "./presentation/render-buttons/render-buttons";
import { RenderModal } from "./presentation/render-modal/render-modal-js";
import { RenderTable } from "./presentation/render.table/render-table";
import usersStore from "./store/users-store";
import { saveUser } from "./use-cases/save-user";

export const UsersApp= async (element)=>{

    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    element.innerHTML = '';
    
    RenderTable(element);
    RenderButtons(element);
    RenderAddButtons(element);
    RenderModal(element, async(userLike)=>{
        const user = await saveUser(userLike);
        usersStore.onUserChanged(user);
        RenderTable();
    });
}