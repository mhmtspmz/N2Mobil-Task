
<template>
    <div class="w-64 h-screen bg-custom-gray border-r flex flex-col justify-between relative"
        style="background-color: #f5f5f5; width: 260px;">

        <div style="height: 68px; margin-top: 20px;">
            <div class="custom-icon flex items-center" style="padding-left: 20px;">
                <img src="@/assets/images/photo1.png" alt="photo1" class="yuvarlak-kutu1">
                <div class="custom-container"
                    style="width:99px; height: 43px;display: flex; flex-direction: column; justify-content:center; padding-left: 10px; ">
                    <span class="todosName">Leanne Graham</span>
                    <span class="mailtel" style="padding-top: 1px;">Sincere@april.biz</span>
                </div>
            </div>
            <div style="border-bottom: 1px solid #D8D9DD; width: 228px; margin: 0 auto; padding-top: 10px;">
            </div>
            <div class="custom-size">

                <ul style=" width: 259px; padding-top: 24px ;">
                    <li>
                        <a href="#/todos" class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checkup-list"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#4F359B" fill="none"
                                stroke-linecap="round" stroke-linejoin="round"
                                style="padding: 32px, 0px, 32px, 0px;  margin-left: 39px; justify-content: space-between;">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                <path d="M9 14h.01" />
                                <path d="M9 17h.01" />
                                <path d="M12 16l1 1l3 -3" />
                            </svg>
                            <span class="text">Todos</span>
                        </a>
                    </li>
                    <li style=" margin-top: 24px;">
                        <a href="#/posts" class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-notebook" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#4F359B" fill="none"
                                stroke-linecap="round" stroke-linejoin="round"
                                style="padding: 32px, 0px, 32px, 0px; margin-left: 39px; justify-content: space-between;">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                                <path d="M13 8l2 0" />
                                <path d="M13 12l2 0" />
                            </svg>
                            <span class="text">Posts</span>
                        </a>
                    </li>
                    <li style=" margin-top: 24px; background-color: white;">
                        <a href="#/albums" class="flex items-center">
                            <div class="rectangle"></div> 
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-heart"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#4F359B" fill="none"
                                stroke-linecap="round" stroke-linejoin="round"
                                style="padding: 32px, 0px, 32px, 0px; margin-left: 32px; justify-content: space-between;">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M15 8h.01" />
                                <path d="M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5" />
                                <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l1.5 1.5" />
                                <path
                                    d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
                            </svg>
                            <span class="text">Albums</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div style="border-bottom: 1px solid #D8D9DD; width: 228px; margin: 0 auto;"></div>

            <div class="custom-icon flex justify-center items-center">
                <img src="@/assets/images/logo_n2mobil.png" alt="Logo" class="w-10 h-10">
                <span style="color: #485B69; width: 92px; height: 33px; font-size: 22px; font-weight: bold;">N2Mobil</span>
            </div>
        </div>
    </div>



    <div style="background-color: #f5f5f5; width: 260px;">
        <div class="yazi1">
            <div class="flex items-center">
                <button @click="clickAlbums" class="flex items-center" style="background: none; border: none; cursor: pointer;">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-left"
                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#26303E" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" />
                        <path d="M8 12l4 4" />
                        <path d="M8 12h8" />
                        <path d="M12 8l-4 4" />
                    </svg></button>
                <span style="margin-left: 24px; font-weight: 600; ">Go Albums</span>
            </div>

            <div style="width: 1124px; margin-top: 20px; display: flex; flex-wrap: wrap;">
                <div style="width: calc(20% - 8px); margin-right: 8px;">
                    <img src="@/assets/images/det1.jpeg" alt="Det1" style="width: 100%; height: auto;">
                </div>
                <div style="width: calc(20% - 8px); margin-right: 8px;">
                    <img src="@/assets/images/det2.jpeg" alt="Det2" style="width: 100%; height: auto;">
                </div>
                <div style="width: calc(20% - 8px); margin-right: 8px;">
                    <img src="@/assets/images/det3.jpeg" alt="Det3" style="width: 100%; height: auto;">
                </div>
                <div style="width: calc(20% - 8px); margin-right: 8px;">
                    <img src="@/assets/images/det4.jpeg" alt="Det4" style="width: 100%; height: auto;">
                </div>
                <div style="width: calc(20% - 8px);">
                    <img src="@/assets/images/det5.jpeg" alt="Det5" style="width: 100%; height: auto;">
                </div>
            </div>

        </div>
    </div>
</template>
  
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const clickAlbums= ()=>{
    router.push("/albums")
}


</script>
  
  
<style src="@/assets/style.css" scoped></style>
  