using Beginner.Test;
using System;

namespace Beginner
{
    class Program
    {
        private const string Value = "no match ";

        static void Main(string[] args)
        {
            int a = 100;
            int b = 200;

            switch (a)
            {
                case 100:
                    Console.WriteLine("100");
                    break;
                case 200:
                    Console.WriteLine("200");
                    break;
            }
            Console.ReadLine();
        }

        public bool CheckSomething()
        {
            var c = 11;
            if(c == 11)
            {
                return true;
            }
            else
            {
                return false;
            }


            return (c == 11) ? true : false;    
        }
    }
}
