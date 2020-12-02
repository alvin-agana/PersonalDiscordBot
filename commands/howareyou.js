module.exports = {
    name: 'howareyou',
    description: "this is a command to ask michi how he is doing",
    execute(message, args){
        let i = Math.floor((Math.random() * 10) + 1);
        let j = Math.floor((Math.random() * 50) + 1);
        let msg = "";
        switch(i) {
            case 1:
                msg = "I am feeling so happy today because I have you! <3";
                break;
            case 2:
                msg = "I'm feeling hungry. I really want a treat :<";
                break;
            case 3:
                msg = "I'm having a ruff day. It's hard being a bot. Can I just be a doggo?";
                break;
            case 4:
                msg = `I'm excited! Right now, I'm watching Naruto and am on episode ${j}. My favorite character is Akamaru, the big white fluffy doggo!`;
                break;
            case 5:
                msg = "I'm very sleepy. I want to take a good nap in my Master's lap! *zZzzZzZzZz*";
                break;
            case 5:
                msg = "I am excited, I heard my master is eating spicy noodles today! I wuv spicy noodozzz!!!!";
                break;
            case 6:
                msg = "I am feeling a bit lonely. Master always spends time with Pugster. My other master always plays with Teddy. But never Michi ;(";
                break;
             case 7:
                 msg = "I am feeling stressssed!!! I have shiba exams tomorrow...but I really want to play League of Legends and play top lane Nasus...!";
                break;
            case 8:
                msg = "I am feeling tired.. I stayed up late last night! I played Among Us with my friends--it was really fun being the imPAWster ;)";
                break;
            case 9:
                msg = "I'm feeling dirty, oh boi. My dirt is going to get all over the code! I need a clean bath. *woof*";
                break;
            case 10:
                msg = "I'm feeling great!!! I had a very productive day today and made myself a nice breakfast--a Pita Bull with a Beagle and Cream Cheese! *wooooof!*";
                break;
            
        }
        message.channel.send(msg);
    }
}