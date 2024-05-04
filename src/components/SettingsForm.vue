<script setup>
import { onUpdated } from 'vue'
import { useStore } from 'vuex';

const Store = useStore()

onUpdated(() => {
    Store.commit('setActionsSelect')
    Store.commit('setCanStartGame')
})

const playernameEdit = (el) => {
    Store.commit('setPlayername', el.target.value)
}

const actionsClick = (ind) => {
    Store.commit('setActions', ind)
}

</script>
<template>
    <div class="px-4 my-4 text-center">
        <div class="col-lg-6 mx-auto">
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <span>
                    <RouterLink class="btn btn-danger btn-lg px-4 gap-3 " to="/game">Начать игру
                    </RouterLink>
                </span>
            </div>
        </div>
        <div class="px-6 text-center">
            <div class="row justify-content-center">
                <div>Уровень сложности: {{ picked }}</div>
                <input type="radio" id="easy" value="Легко" v-model="picked">
                <label for="jack">Легко</label>
                <input type="radio" id="normal" value="Нормально" v-model="picked">
                <label for="normal">Нормально</label>
                <input type="radio" id="hard" value="Сложно" v-model="picked">
                <label for="hard">Сложно</label>
                <div class="col-4 d-grid gap-2">
                    <h3>Математические действия:</h3>
                    <div class="d-grid gap-2" v-for="(i, index) in Store.state.actions" :key="index">
                        <input type="checkbox" class="btn-check" :id="index" :checked="i.select" autocomplete="off"
                            @click="actionsClick(index)">
                        <label class="btn btn-outline-primary" :for="index">{{ i.caption }}</label>
                    </div>
                </div>
            </div>
            <br />
        </div>
    </div>


</template>