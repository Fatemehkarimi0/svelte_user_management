import {writable} from 'svelte/store';
import { array_move } from '../utils';

function createUsers() {
    const {subscribe, set, update} = writable([
        {id: 1, checked: false, code: 4980011111, mobile: "09350000000", image: "https://api.lorem.space/image/face?w=150&h=150&t=1", address: "تهران، خیابان قیطریه - قیطریه 21", name: "سینا", family: "قره داغی", birth_date: "1370/12/27", confirmed: false},
        {id: 2, checked: false, code: 4980011112, mobile: "09150000000", image: "https://api.lorem.space/image/face?w=150&h=150&t=2", address: "مشهد خیابان نیاوران - نیاوران 40", name: "علی", family: "موسوی", birth_date: "1375/02/27", confirmed: false},
        {id: 3, checked: false, code: 4980011113, mobile: "09120000000", image: "https://api.lorem.space/image/face?w=150&h=150&t=3", address: "کرج خیابان سعدی - سعدی 2", name: "سارا", family: "حسینی", birth_date: "1381/12/05", confirmed: false},
    ]);

    return {
        subscribe,
        addItem: (user) => update((n) => {
            user.id = n.length + 1;
            n.unshift(user);
            return n;
        }),
        editItem: (user) => update((n) => {
            for (let i = 0; i < n.length; i++) {
                if (n[i].id === user.id) {
                    n[i] = user;
                    console.log(n[i].c_name);
                    if(n[i].c_name === true && n[i].c_family === true && n[i].c_mobile === true && n[i].c_code === true && n[i].c_address === true && n[i].c_birth_date === true && n[i].c_image === true){
                        n[i].confirmed = true;
                    }
                    else{
                        n[i].confirmed = false;
                    }
                    break;
                }
            }
            return n;
        }),
        changeAllChecked: (isChecked) => update((n) => {
            for (let i = 0; i < n.length; i++) {
                n[i].checked = isChecked;
            }
            return n;
        }),
        updateChecked: (user) => update((n) => {
            for (let i = 0; i < n.length; i++) {
                if (n[i].id === user.id) {
                    n[i].checked = user.checked;
                    break;
                }
            }
            return n;
        }),
        removeItem: () => update((n) => {
            for (let i = 0; i < n.length; i++) {
                if (n[i].checked) {
                    n.splice(i, 1);
                }
            }
            return n;
        }),
        updatePins: () => update((n) => {
            for (let i = 0; i < n.length; i++) {
                if (n[i].checked) {
                    array_move(n, i, 0);
                }
            }
            return n;
        }),
        search: (text) => update((n) => {
            for (let i = 0; i < n.length; i++) {
                if (!n[i].name.includes(text) && !n[i].checked) {
                    n[i].hide = true;
                }
                else{
                    n[i].hide = false;
                }
            }
            return n;
        }),
        clear: () => {
            set([]);
        }
    };
}

export const users = createUsers();
