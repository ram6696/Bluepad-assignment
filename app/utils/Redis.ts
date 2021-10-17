import redis from "redis";
const client = redis.createClient();

export class Redis {
    public flushDB = () => {
        return client.flushdb( function (err, succeeded) {
            console.log(succeeded);
        });
    }

    public set = (key, value) => {
       return client.set(key, value);
    }

    public get = (key, value) => {
        return client.get(key, function(err, reply) {
            return reply.toString();
        });
    }

    public getAll = async () => {
        const values = [];
        await client.keys('*', function (err, keys) {
            if (err) return console.log(err);     
            for(var i = 0, len = keys.length; i < len; i++) {
              values.push(JSON.parse(keys[i]));
            }
        });  
        return values;
    }
}