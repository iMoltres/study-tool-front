<div class="main-content">
    <section class="modal hidden">
        <div class="flex">
            <img src="user.png" width="50px" height="50px" alt="user" />
            <button class="btn-close">⨉</button>
        </div>
        <div>
            <h3>Stay in touch</h3>
            <p>
                This is a dummy newsletter form so don't bother trying to test it.
                Not that I expect you to, anyways. :)
            </p>
        </div>
    
        <input type="email" id="email" placeholder="brendaneich@js.com" />
        <button class="btn">Submit</button>
    </section>
</div>

<style>
    .main-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #222;
        position: absolute;
        top: 0;
        left: 50%;
        min-height: 100vh;
    }
    .modal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.4rem;
        width: 450px;
        padding: 1.3rem;
        min-height: 250px;
        position: absolute;
        top: 20%;
        background-color: white;
        border-radius: 15px;
    }

    .modal .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .modal input {
        padding: 0.7rem 1rem;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 0.9em;
    }

    .modal p {
        font-size: 0.9rem;
        color: #777;
        margin: 0.4rem 0 0.2rem;
    }

    button {
        cursor: pointer;
        border: none;
        font-weight: 600;
    }

    .btn {
        display: inline-block;
        padding: 0.8rem 1.4rem;
        font-weight: 700;
        background-color: black;
        color: white;
        border-radius: 5px;
        text-align: center;
        font-size: 1em;
    }

    .btn-close {
        transform: translate(10px, -20px);
        padding: 0.5rem 0.7rem;
        background: #eee;
        border-radius: 50%;
    }


    @media (prefers-color-scheme: dark) {
        .modal {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0.4rem;
            width: 450px;
            padding: 1.3rem;
            min-height: 250px;
            position: absolute;
            top: 20%;
            background-color: #24323E;
            border-radius: 15px;
        }
    }
</style>
