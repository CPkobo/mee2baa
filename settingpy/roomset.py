import requests

my_dark = "https://sheepy-meme.builtwithdark.com/"

if __name__ == "__main__":
    new_room = "room.txt"
    room_info = dict()
    userpw = dict()
    with open("room.txt", "r", encoding="utf-8") as f:
        for line in f.readlines():
            l = line.split(",")
            if l[0] == "room":
                room_info["name"] = l[1].strip()
            elif l[0] == "key":
                room_info["key"] = l[1].strip()
            elif l[0] == "user":
                userpw[l[1].strip()] = l[2].strip()
            else:
                continue

    room_info["userpw"] = userpw
    
    magic_word = input("who should be respected?: ")
    key = input("key for skyway: ")
    headers = { "Content-Type": "application/json", "Authorization": f"Bearer {magic_word}"}
    res = requests.post(f"{my_dark}newsetting", headers=headers, json=room_info)
    print(res.text)