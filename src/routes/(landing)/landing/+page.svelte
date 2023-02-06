
<script lang="ts">   
    import { goto} from "$app/navigation";
    
    function routeToSignUp(route: string, replaceState: boolean) {
        goto(`/${route}`, {replaceState});
    }
</script>


<div>
    <div style="width:100%">
        <div style="text-align: center;">
            <h1 class="font-1">Study Buddy</h1>
            <h2 class="font-4">
                Study smarter not harder with Study Buddy. Respect John Brown our lord and savior.
            </h2>
            <div class="profile" style="justify-content: center;">
                <button class="sign-up" on:click={() => routeToSignUp("signup", true) }>Sign Up</button>          
                <button class="sign-up" on:click={() => routeToSignUp("login", true)}>Login</button>
            </div>
            <div class="box">
                <h3 class = "font-5">
                    Study Buddy is a revolutionary study tool designed to help students achieve academic success. With its innovative approach to assignment prioritization, it provides students with a customized, easy-to-use platform that organizes their daily studies based on the assignment difficulty, the number of assignments for each class, and their past grades for each assignment. 
                    
                </h3>
                <h4 class = "font-5">
                    Not only does Study Buddy help you stay organized, but it also provides you with valuable study tips and strategies to improve your performance. With AI assistance, Study Buddy predicts the grade you are likely to receive on each assignment, allowing you to adjust your study habits and maximize your chances of success. 
                    
                </h4 >
                <h5 class = "font-5">
                    Best of all, Study Buddy is completely free to use. Whether you are a student struggling to stay on top of your coursework or a high achiever looking to take your performance to the next level, Study Buddy is the perfect study tool for you. Reach your academic potential with Study Buddy today!
                </h5 >
            </div>
            <div class = "image">
                <div> <img src="https://i.imgur.com/83ipN2t.png" alt="Grades" width="100%"/> </div>
                <div class = "text"> 
                    <div class = "font-2">
                        The grades tab allows you to view all past assignments and the grade received for each of them.
                    </div> 
                    <div class = "font-2">
                        Assignments will be ordered based on the time the assignment was entered. 
                    </div> 
                    <div class = "font-2">
                        The grades tab also allows you to upload an assigment; with the use of AI, you receive a grade prediction and feedback on the assignment.
                    </div> 
                </div>
            </div>

            <div class = "image">
                <div> <img src="https://i.imgur.com/jJgOA0a.png" alt="Study Priorities" width="90%"/> </div>
                <div class = "text"> 
                    <div class = "font-2">
                        The today's priorities tab arranges you assignments in order from most to least important.
                    </div> 
                    <div class = "font-2">
                        This will help you be more organized while working and it will give reminders of what assignments you need to do
                    </div> 
                    <div class = "font-2">
                        The AI also gives you an estimation of the time it takes to complete an assignment.
                    </div> 
                </div>
            </div>

            <div class = "image">
                <div> <img src="https://i.imgur.com/4y1qk1t.png" alt="Study tips" width="100%"/> </div>
                <div class = "text"> 
                    <div class = "font-2">
                        Based on the assignments users have pending, AI offers several study tips to help the user develop their knowledge on the topic.
                    </div> 
                    <div class = "font-2">
                         The Study Tips are customized to each individual assignment or test.
                    </div> 
                </div>
            </div>
           
            
            
        </div>
    </div>
</div>

<style>
    :global(body) {
        background-color: #F5F5F5;     
        margin: 0;   
    }
    .profile {
        display: flex;
        margin-top: 0;
        align-items: center;
        height: 90px;
    }
    .image {
        display: flex;
        align-content: left;
        text-align: center;
        justify-content: space-evenly;
        
    }
    .text {
        display: flex;
        flex-direction: column;
        align-content: left;
        text-align: center;
        justify-content: space-evenly;
        
        
    }
    .font-1 {
        font-size: 50px;
        color: #000000;
        font-family: Manrope;
    }
    .font-2 {
        font-size: 18px;
        font-weight: bolder;
        margin-right: 14px;
        margin-left: 14px;
        font-family: Manrope;
        
    }
    .font-4 {
        font-size: 20px;
        font-weight: bolder;
        margin-right: 14px;
        margin-left: 14px;
        font-family: Manrope;
        color: #000000;
    }
    .font-5 {
        font-size: 17px;
        font-weight: bolder;
        margin-right: 60px;
        margin-left: 60px;
        font-family: Manrope;
        color: #000000;
    }
    .sign-up {
        background-color: #dafad4;
        border: none;
        border-radius: 10px;
        padding: 1rem;
        font-size: 15px;
        font-family: Manrope;
        color: #2a5e1a;
        font-weight: 900;
        text-shadow: 0px 0.5px #2a5e1a;
        margin-right: 15px;
        transition: 0.2s;
    }
    .sign-up:hover {
        background-color: #c4e3bf;
        cursor: pointer;
        transition: 0.2s;
    }
    .box {
        height: fit-content;
        padding-bottom: 1.5rem;
        background-color: #ffffff;
        border-color: #ffffff;
        border: 20px solid rgb(255, 255, 255);
        background-size: cover;
        align-self: center;
    }
    @media (prefers-color-scheme: dark) {
        :global(body) {
            background-image: none;
            background-color: #192630;
            color: white;
        }
        .font-1 {
            color: #ffffff;
        } 
        .font-4 {
            color: #ffffff;
        }
        .sign-up {
            background-color: #2a5e1a; 
            color: #dafad4;
            text-shadow: 0px 0.5px #dafad4;
        }
    }
</style>
