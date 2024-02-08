


<template>
  <div class="w-64 h-screen bg-custom-gray border-r flex flex-col justify-between relative"
    style="background-color: #f5f5f5; width: 260px;">
    <div class="pt-10">
      <div class="custom-size">
        <ul style="background-color: #FFFFFF; width: 259px;">
          <li>
            <a href="#" class="flex items-center">
              <div class="rectangle"></div> 
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="24" height="24"
                viewBox="0 0 24 24" stroke-width="2" stroke="#4F359B" fill="none" stroke-linecap="round"
                stroke-linejoin="round"
                style="padding: 32px, 0px, 32px, 0px; margin-left: 32px; justify-content: space-between;">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
              <span class="text">Users</span>

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
    <div class="yazı" style="font-weight: 600;">All users
      <div
        style="width: 1124px; height: auto;  left: 288px; margin-top: 24px; display: flex; justify-content: space-between;">
        <button @click="clickTodos(index)" v-for="(item, index) in posts" :key="index"
          class="flex justify-center items-center" style="width: calc(33.33% - 8px);">
          <!-- Buton İçeriği -->
          <div class="flex flex-col items-center kart1">
            <div class="kart" style="display: flex;  ">
              <div class="custom-class">
                <div class="custom-class">
                  <div style="width: 35%; float: left;">
                    <div>
                      <img v-if="item.id === 1" src="@/assets/images/photo1.png" alt="photo1" class="yuvarlak-kutu">
                      <img v-else-if="item.id === 2" src="@/assets/images/photo2.png" alt="photo2" class="yuvarlak-kutu">
                      <img v-else-if="item.id === 3" src="@/assets/images/photo3.png" alt="photo3" class="yuvarlak-kutu">
                    </div>
                  </div>
                  <div class="custom-container"
                    style="width: 65%; height: 100px;display: flex; flex-direction: column; justify-content:center; padding-left: 10px; ">
                    <span class="isim">{{ item.name }}</span>
                    <span class="mailtel" style="width: 120px; height: 14px;">{{ item.email }}</span>
                    <span class="mailtel" style="width: 122px; height: 14px;">{{ item.phone }}</span>
                  </div>
                  <div
                    style=" padding-top: 16px; width: 259px; height: 198px; margin-top: 16px; display: flex; flex-direction: column; ">
                    <div style="width: 259px; height: 60px; display: flex;"><svg xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-map-pin-heart" width="24" height="24" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="#26303E" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 11a3 3 0 1 0 -3.973 2.839" />
                        <path d="M11.76 21.47a1.991 1.991 0 0 1 -1.173 -.57l-4.244 -4.243a8 8 0 1 1 13.657 -5.588" />
                        <path
                          d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
                      </svg>
                      <div style="display: flex; flex-direction: column;">
                        <span style="margin-left: 8px; color:#26303E ;" class="isim">Location</span>
                        <span style="margin-left: 8px; color:#5C6672;" class="mailtel">{{ item.address }}</span>
                      </div>
                    </div>
                    <div style="padding-top: 40px; width: 259px; height: 60px; display: flex;"><svg
                        xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-skyscraper"
                        width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#26303E" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 21l18 0" />
                        <path d="M5 21v-14l8 -4v18" />
                        <path d="M19 21v-10l-6 -4" />
                        <path d="M9 9l0 .01" />
                        <path d="M9 12l0 .01" />
                        <path d="M9 15l0 .01" />
                        <path d="M9 18l0 .01" />
                      </svg>
                      <div style="display: flex; flex-direction: column;">
                        <span style="margin-left: 8px; color:#26303E ;" class="isim">Company</span>
                        <span style="margin-left: 8px; color:#5C6672 ;" class="mailtel">Timko Sokak no:2 &nbsp;
                          YENİMAHALLE/ANKARA</span>
                      </div>
                    </div>
                    <div style="padding-top:40px; width: 259px; height: 60px; display: flex;"><svg
                        xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-share" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#26303E" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20.94 13.045a9 9 0 1 0 -8.953 7.955" />
                        <path d="M3.6 9h16.8" />
                        <path d="M3.6 15h9.4" />
                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                        <path d="M12.5 3a16.991 16.991 0 0 1 2.529 10.294" />
                        <path d="M16 22l5 -5" />
                        <path d="M21 21.5v-4.5h-4.5" />
                      </svg>
                      <div style="display: flex; flex-direction: column;">
                        <span style="margin-left: 8px; color:#26303E ;" class="isim">Website</span>
                        <span style="margin-left: 8px; color:#5C6672 ;" class="mailtel">{{ item.website }}</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </button>
      </div>

    </div>
  </div>
</template>


<script setup>
import { useRouter } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';
import store from '@/store';

const router = useRouter();
const posts = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users/");
    posts.value = response.data.slice(0, 3); 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
const selectedId = ref(null);


const clickTodos = (index) => {
  selectedId.value = posts.value[index].id;
  router.push({ path: '/todos', query: { id: selectedId.value, } });
  store.commit('setSelectedId', selectedId); 
};


router.push({})
</script>


<style src="@/assets/style.css" scoped></style>
